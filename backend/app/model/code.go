package model

type (
	Code struct {
		Model
		Title   string `json:"title"`
		Content string `json:"content"`
		Tag     string `json:"tag"`
	}
)

func (Code) TableName() string {
	return "sc_code"
}

func GetCodeList() []Code {
	var codes []Code
	db.Find(&codes)
	return codes
}

func AddCode(code *Code) {
	db.Create(code)
}
