package handle

import "github.com/labstack/echo/v4"

func codeHandle(e *echo.Echo) {
	e.GET("", getCode)
}

func getCode(echo.Context) error {

	return nil
}
