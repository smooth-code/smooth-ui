export const cx = styles => propsOrTheme => styles.map(style => 
  typeof style === 'function' ? style(propsOrTheme) : style
)