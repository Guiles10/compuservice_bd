export declare enum UserFunction {
    ATENDIMENTO = "Atendimento",
    SUPORTE = "Suporte",
    PROGRAMACAO = "Programa\u00E7\u00E3o",
    FATURAMENTO = "Faturamento",
    SUPORTEHOSPITAL = "Suporte Hospital",
    INSTALACAO = "Instala\u00E7\u00E3o"
}
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    function: UserFunction[];
    isAdmin: boolean;
}
