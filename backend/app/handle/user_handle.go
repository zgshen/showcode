package handle

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"showcode/app/response"
	"showcode/app/service"
	"strconv"
)

func userHandle(e *echo.Echo) {
	e.GET("/user/info", Get)
	e.GET("/user/list", GetAll)
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
