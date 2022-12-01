package handle

import (
	"crypto/md5"
	"encoding/hex"
	"github.com/labstack/echo/v4"
	"net/http"
	"showcode/app/model"
	"showcode/app/response"
	"showcode/app/service"
	"strconv"
)

func userHandle(e *echo.Echo) {
	e.POST("/api/user/login", Login)
	e.GET("/api/user/info", Get)
	e.GET("/api/user/list", GetAll)
}

func Login(c echo.Context) (err error) {
	u := new(model.User)
	if err = c.Bind(u); err != nil {
		return c.JSON(http.StatusInternalServerError, response.ParamError)
	}

	ctx := md5.New()
	ctx.Write([]byte(u.Password))
	password := hex.EncodeToString(ctx.Sum(nil))

	user := service.GetUser(u.Username, password)
	if user == (model.User{}) {
		return c.JSON(http.StatusInternalServerError, "user doesn't exist.")
	}
	return c.JSON(http.StatusOK, user)
}

func Get(c echo.Context) error {
	param := c.QueryParam("id")
	if param == "" {
		return c.JSON(http.StatusInternalServerError, response.ParamError)
	}
	id, err := strconv.Atoi(param)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, response.ServerUnknownError)
	}
	user := service.Get(id)
	return c.JSON(http.StatusOK, user)
}

func GetAll(c echo.Context) error {
	users := service.GetList()
	return c.JSON(http.StatusOK, users)
}
