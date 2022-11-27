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
	code1 := model.Code{
		Model: model.Model{
			ID:        1,
			CreatedAt: 1669197844491,
			UpdatedAt: 1669197844491},
		Content: "Hello world.",
		Tag:     "text,first"}
	code2 := model.Code{
		Model: model.Model{
			ID:        2,
			CreatedAt: 1669197844491,
			UpdatedAt: 1669197844491},
		Content: "Today is holiday.",
		Tag:     "holiday"}
	arr := [2]model.Code{code1, code2}
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
