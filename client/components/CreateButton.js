import { FaPlus } from 'react-icons/fa'

const CreateButton = () => {
    return (
        <button style={{
            position: 'fixed',
            bottom: '2em',
            right: '2em',
            zIndex: '2',
            background: 'linear-gradient(128deg, #00d2fcc5 60%, #009efad7 100%)',
            borderColor: '#17e0b2',
            boxShadow: 'rgba(99,99,99,.2) 0px 2px 8px 0px',
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '1rem',
            cursor: 'pointer'
        }}>
            <FaPlus size={25} color='#fff' />
            <span style={{
                color: '#0b0051',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '1.8rem',
                marginLeft: '.6rem',
            }}>New Topic</span>
        </button>
    )
}

export default CreateButton