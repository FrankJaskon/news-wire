import { TFunction } from 'i18next'
import { ValidationError, ValidationErrorType } from '../consts/validationError'
import { EditableArticleType } from '../types/editableArticleScheme'

type ValidateArticleType = (article: EditableArticleType) => ValidationErrorType[]

export const validateArticle: ValidateArticleType = article => {
	const errors: ValidationErrorType[] = []

	if (!article.title) {
		errors.push(ValidationError.title)
	}

	return errors
}

export const errorMapper = (
	error: ValidationErrorType,
	t: TFunction<'article', undefined, 'article'>
) => {
	if (!ValidationError[error]) {
		return t('editable-article.validation.basic')
	}

	return t(`editable-article.validation.${ValidationError[error]}`)
}
