import { FaPlus } from 'react-icons/fa'

const CreateButton = () => {
    return (
        <button style={{
            position: 'fixed',
            bottom: '2em',
            right: '2em',
            zIndex: '2',
            background: 'linear-gradient(128deg, rgb(24, 226, 179) 60%, rgb(0, 212, 255) 100%)',
            borderColor: '#17e0b2',
            boxShadow: 'rgba(99,99,99,.2) 0px 2px 8px 0px',
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '.8rem',
            cursor: 'pointer'
        }}>
            <FaPlus size={25} color='#fff' />
            <span style={{
                color: '#2e7d32',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '1.8rem',
                marginLeft: '.6rem',
            }}>New Topic</span>
        </button>
    )
}

export default CreateButton