package service

import "showcode/app/model"

func GetCodeList() []model.Code {
	codes := model.GetCodeList()
	return codes
}

func AddCode(code *model.Code) {
	model.AddCode(code)
}
