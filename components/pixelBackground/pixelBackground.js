
export default function PixelBackground() {
  return (
    <div className="flex overflow-hidden h-screen">
        {
            [...Array(20)].map( (_, i) => {
                return <div className="w-16 h-full"></div>
            })
        }
    </div>
  )
}
