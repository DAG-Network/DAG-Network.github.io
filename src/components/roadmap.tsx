import RoadmapBackground from '../assets/roadmap-backgroung.png'
import RoadmapImg from '../assets/roadmap.png'

export const Roadmap = () => {
    return (
        <div id='roadmap' className="container column-aligned">
            <div className="row title">
                Our Roadmap
            </div>
            <div style={{
          background: `url(${RoadmapBackground}) no-repeat`
        }}>
            <img alt='referal' src={RoadmapImg} width='100%' />
        </div>
        </div>
    )
}