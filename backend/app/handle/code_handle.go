package handle

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"showcode/app/model"
	"showcode/app/response"
	"showcode/app/service"
	"strconv"
)

func codeHandle(e *echo.Echo) {
	e.GET("/api/code/list", getList)
	e.GET("/api/codes/:id", getOne)
	e.POST("/api/code/add", addCode)
}

func getList(c echo.Context) error {
	arr := service.GetCodeList()
	return c.JSON(http.StatusOK, arr)
}

func getOne(c echo.Context) error {
	param := c.Param("id")
	if param == "" {
		return c.JSON(http.StatusInternalServerError, response.ParamError)
	}
	id, err := strconv.Atoi(param)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, response.ServerUnknownError)
	}
	code := service.GetCodeById(id)
	return c.JSON(http.StatusOK, code)
}

func addCode(c echo.Context) (err error) {
	m := new(model.Code)
	if err = c.Bind(m); err != nil {
		return c.JSON(http.StatusInternalServerError, response.ParamError)
	}
	service.AddCode(m)
	return c.JSON(http.StatusOK, m)
}
