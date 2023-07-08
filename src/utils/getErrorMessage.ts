import { ErrorCode, ErrorResult } from "./generated/graphql";

interface ErrorMessageProps {
    errorCode: ErrorCode;
    message: ErrorResult["message"];
}

export function getErrorMessage(
    error?: ErrorResult
): ErrorMessageProps | undefined {

    if (!error || !error.errorCode) {
        return undefined;
    }

    switch (error.errorCode) {
        case ErrorCode.CouponCodeInvalidError:
            return {
                errorCode: error.errorCode,
                message: "Esse cupom é inválido"
            };
        case ErrorCode.CouponCodeExpiredError:
            return {
                errorCode: error.errorCode,
                message: "Esse cupom expirou"
            };
        case ErrorCode.CouponCodeLimitError:
            return {
                errorCode: error.errorCode,
                message: "Esse cupom atingiu o limite de utilização",
            };
        case ErrorCode.EmailAddressConflictError:
            return {
                errorCode: error.errorCode,
                message: "Esse email já está sendo utilizado",
            };
        case ErrorCode.InsufficientStockError:
            return {
                errorCode: error.errorCode,
                message: "Estoque insuficiente"
            };
        case ErrorCode.InvalidCredentialsError:
            return {
                errorCode: error.errorCode,
                message: "Credenciais inválidas"
            };
        case ErrorCode.NegativeQuantityError:
            return {
                errorCode: error.errorCode,
                message: "Quantidade inválida"
            };
        case ErrorCode.NoActiveOrderError:
            return {
                errorCode: error.errorCode,
                message: "Não existe ordem ativa"
            };
        case ErrorCode.OrderLimitError:
            return {
                errorCode: error.errorCode,
                message: "Limite de ordens atingido",
            };
        case ErrorCode.OrderModificationError:
            return {
                errorCode: error.errorCode,
                message: "Erro ao modificar a ordem",
            };
        case ErrorCode.UnknownError:
        case ErrorCode.NativeAuthStrategyError:
            return {
                errorCode: error.errorCode,
                message: "Erro desconhecido, tente novamente mais tarde"
            };
        case ErrorCode.OrderStateTransitionError:
        case ErrorCode.IneligibleShippingMethodError:
            return {
                errorCode: error.errorCode,
                message: error.message
            };
    }


}