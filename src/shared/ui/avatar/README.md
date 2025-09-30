# Avatar

Визуальное отображение профиля пользователя: чаще всего это фотография, иллюстрация или инициал(ы)

## Необходимые зависимости

```bash
yarn add @radix-ui/react-avatar';
# or
npm i @radix-ui/react-avatar';
```

## Использование

```jsx
<Avatar />
```

### src

Необходимо указать пропс `src`, куда нужно будет вставить ссылку на изображение и `alt` в качестве атрибута, описывающего изображение

```jsx
<Avatar src="www.google.com/images/cat" />
```

### Sizes

Для изменения размера компонента воспользуйтесь параметром `size`. Вы можете установить следующие значения
`XSmall`, `small` (default), `medium`, `large`, `XLarge`

```jsx
<Avatar size="XLarge" />
<Avatar size="large" />
<Avatar size="medium" />
<Avatar size="small" />
<Avatar size="XSmall" />
```

### Fallback

Существует пропс `fallback`, в который можно прокинуть компонент или текст, который будет отображен в качестве альтернативы, если ссылка на изображение отсутствует.

```jsx
<Avatar src="www.google.com/images/cat" fallback='text' />
<Avatar src="www.google.com/images/cat" fallback={<IconCat />} />
```

### FallbackClassName

Существует пропс `fallbackClassName`, в который можно записать стили для `fallback`

```jsx
<Avatar src="www.google.com/images/cat" fallback="text" fallbackClassName={cnFallback} />
```
