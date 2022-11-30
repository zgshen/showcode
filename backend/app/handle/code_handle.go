package handle

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"showcode/app/model"
	"showcode/app/service"
)

func codeHandle(e *echo.Echo) {
	e.GET("/api/list", getList)
	e.POST("api/add", addCode)
}

func getList(c echo.Context) error {
	arr := service.GetCodeList()
	return c.JSON(http.StatusOK, arr)
}

func addCode(c echo.Context) (err error) {
	m := new(model.Code)
	if err = c.Bind(m); err != nil {
		return err
	}
	service.AddCode(m)
	return c.JSON(http.StatusOK, m)
}
