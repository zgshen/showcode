package app

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"showcode/app/handle"
	"showcode/config"
)

func Run() {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// init handle
	handle.InitHandle(e)

	// Start
	e.Logger.Fatal(e.Start(config.Config.Server.Port))

}
