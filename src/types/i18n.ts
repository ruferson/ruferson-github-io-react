export type Language = 'es' | 'en'

/** A value localized to all supported languages. */
export type Localized<T = string> = Record<Language, T>

/** Plain string (identical in all languages) or localized value. */
export type Text = string | Localized
