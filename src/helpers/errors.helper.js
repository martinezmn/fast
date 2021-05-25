module.exports = class errorsHelper {
    static messageErrors = {
        default: {
            required: 'Este campo não pode ser deixado vazio.'
        },
        email_code: 'Código inválido.'
    };

    static async throw(errors, reply) {
        let field = '';
        let message = [];

        for (let i = 0; i < errors.validation.length; i++) {
            if (errors.validation[i].keyword == 'required') {
                field = errors.validation[i].params.missingProperty;
                message.push({ [field]: this.messageErrors.default.required });
            } else {
                field = errors.validation[i].dataPath.replace('.', '');
                message.push({ [field]: this.messageErrors[field] });
            }
        }

        reply.code(400).send({ message: 'Erro de validação', fields: message });
    }
}
