
import { Alert } from 'react-bootstrap'
import Navegar from '../components/Navegar'

const page = () => {
  return (
    <>
    <Navegar>
    {[
        { variant: 'primary', text: 'Teste' },
        { variant: 'secondary', text: 'de' },
        { variant: 'success', text: 'pagina' },
        { variant: 'danger', text: 'com' },
        { variant: 'warning', text: 'alert' },
        { variant: 'info', text: 'Diferentes tipos' },
        { variant: 'light', text: 'de alertas' },
        { variant: 'dark', text: 'do Bootstrap' }
    ].map((item, index) => (
        <Alert key={index} variant={item.variant}>{item.text}</Alert>
    ))} 
    </Navegar>
    </>
  )
}

export default page