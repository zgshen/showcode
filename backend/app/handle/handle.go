package handle

import "github.com/labstack/echo/v4"

func InitHandle(e *echo.Echo) {
	userHandle(e)
	codeHandle(e)
}
