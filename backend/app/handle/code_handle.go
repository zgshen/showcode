package handle

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"showcode/app/model"
)

func codeHandle(e *echo.Echo) {
	e.GET("/api/list", getList)
}

func getList(c echo.Context) error {
	//str := "[{\"content\":\"Hello world.\",\"tag\":\"text,first\"},{\"content\":\"Today is holiday.\",\"tag\":\"holiday\"}]"
	//m := model.Model{1, 1669197844491, 1669197844491}
	c1 := model.Code{model.Model{1, 1669197844491, 1669197844491}, "Hello world.", "text,first"}
	c2 := model.Code{model.Model{2, 1669197844491, 1669197844491}, "Today is holiday.", "holiday"}
	arr := [2]model.Code{c1, c2}
	return c.JSON(http.StatusOK, arr)
}
