package config

import (
	"errors"
	"github.com/labstack/gommon/log"
	"os"
)

type conf struct {
	ReleaseMode bool   `toml:"releaseMode,omitempty"`
	LogLevel    string `toml:"logLevel,omitempty"`
	App         app
	Server      server
}

type app struct {
	Name string `toml:"name"`
}

type server struct {
	Port string `toml:"port"`
}

var (
	Config            conf // holds the global app config.
	defaultConfigFile = "conf.toml"
)

func init() {
	initConfig()
}

func initConfig() error {
	//default config value
	Config = conf{
		ReleaseMode: false,
		LogLevel:    "INFO",
	}

	_, err := os.Stat(defaultConfigFile)
	if err != nil {
		return errors.New("config file error msg:" + err.Error())
	} else {
		log.Infof("config:%v", Config)
		return errors.New("config decode err:" + err.Error())
	}

	return nil
}
