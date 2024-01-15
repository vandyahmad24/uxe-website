export default function Container({ children, style = null }) {
  return <div className="max-w-[1440px] mx-auto overflow-hidden" style={style}>{children}</div>
}
