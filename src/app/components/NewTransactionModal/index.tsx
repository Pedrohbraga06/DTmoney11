/* eslint-disable @next/next/no-img-element */
import  Modal  from 'react-modal'
import { Container } from './styles'

import closeimg from '../../assets/closeimg.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} 
             onRequestClose={onRequestClose}
             overlayClassName='react-modal-overlay'
             className='react-modal-content'
           >
            <button 
            type='button' 
            onClick={onRequestClose}  
            className='react-modal-close'>
                
                <img src={closeimg} alt="Fechar modal" />
            </button>
               <Container>
            <input placeholder='Titulo' 
            />

            <input type='number' placeholder='Valor' 
            />

            <input placeholder='Categoria'
             />

            <button type='submit'>
                Cadastrar
            </button>
            
                 <h2>Cadastrar transacao</h2>
               </Container>
     
           </Modal>
    )
}