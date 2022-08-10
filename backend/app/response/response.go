package response

type (
	Response struct {
		Data      interface{} `json:"data"`
		ErrorCode int         `json:"errorCode"`
		Error     string      `json:"error"`
	}

	GlobalErrorCode struct {
		ErrorCode int    `json:"errorCode"`
		Error     string `json:"error"`
	}
)

func Of(data interface{}) *Response {
	res := &Response{
		Data:      data,
		Error:     "",
		ErrorCode: 200,
	}
	return res
}

func Error(g *GlobalErrorCode) *Response {
	if g == nil {
		g = &GlobalErrorCode{
			ErrorCode: 500,
			Error:     "",
		}
	}

	res := &Response{
		Error:     g.Error,
		ErrorCode: g.ErrorCode,
	}
	return res
}

var (
	ParamError         = GlobalErrorCode{ErrorCode: 500, Error: "参数错误"}
	ServerUnknownError = GlobalErrorCode{ErrorCode: 500, Error: "服务器发生未知异常"}
)
