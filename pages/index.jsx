import Title from "../src/comonents/title/Title"
import Subtitle from "../src/comonents/subtitle/Subtitle"
import Button from "../src/comonents/button/Button"

function HomePage () {
  return(
    <div>
      <Title> um titulo</Title>
      <Subtitle text="um subtitulo"/>
      <Title>outro titulo</Title>
      <Subtitle text="outro subtitulo"/>
      <Button>botão teste</Button>
    </div>
  )
  
}

export default HomePage