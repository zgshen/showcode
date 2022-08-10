package config

import (
	"errors"
	"github.com/BurntSushi/toml"
	"github.com/labstack/gommon/log"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"io/ioutil"
	"os"
)

var (
	Config            conf    // global app config.
	DBConn            gorm.DB // global db connection
	defaultConfigFile = "config/config.toml"
)

type conf struct {
	ReleaseMode bool   `toml:"releaseMode,omitempty"`
	LogLevel    string `toml:"logLevel,omitempty"`
	App         app
	Server      server
	Database    database
}

type app struct {
	Name string `toml:"name"`
}

type server struct {
	Port string `toml:"port"`
}

type database struct {
	Path string `toml:"path"`
}

// 初始化
func init() {
	initConfig()
	initDB()
}

// 加载配置文件
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
		log.Infof("load config file: " + defaultConfigFile)
		fileBytes, err := ioutil.ReadFile(defaultConfigFile)
		if err != nil {
			return errors.New("config load fail")
		}
		_, err = toml.Decode(string(fileBytes), &Config)
		if err != nil {
			return errors.New("config decode err:" + err.Error())
		}
	}
	log.Infof("config:%v", Config)
	return nil
}

// 数据库初始化
func initDB() error {
	db, err := gorm.Open(sqlite.Open(Config.Database.Path), &gorm.Config{
		// 根据结构体推断的表名不加复数s
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true, // 使用单数表名
		},
	})
	if err != nil {
		log.Infof("open database fail" + err.Error())
		return errors.New("open database fail")
	}
	DBConn = *db
	return nil
}
