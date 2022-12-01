package service

import "showcode/app/model"

func GetCodeList() []model.Code {
	codes := model.GetCodeList()
	return codes
}

func GetCodeById(id int) model.Code {
	code := model.GetCodeById(id)
	return code
}

func AddCode(code *model.Code) {
	model.AddCode(code)
}
