import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { editarUsuario } from "../../firebase/auth";
import { deleteUser, getAuth, reload, updateCurrentUser } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";



export function ModalUser(props){
    const usuarioLogado = useContext(AuthContext);
    const {register,handleSubmit,formState:{errors},reset} = useForm();



    useEffect(()=>{
        reset(usuarioLogado)
    },[]);


    function onSubmit(data){
        editarUsuario(usuarioLogado,data).then(()=>{
            toast.success("Alterações salvas!",{duration:2000, position:"bottom-right"})
            setShow(false)
        }).catch((error)=>{
            toast.error(`Aconteceu um erro. Código ${error.code}`)
        })   
    };

    function onDelete(){
        const deletar = window.confirm(`Tem certeza que deseja excluir o usuário ${usuarioLogado.email}?`)
        if(deletar){
            deleteUser(usuarioLogado).then(()=>{
            setShow(false)
        }).catch((error)=>{
            toast.error(`Aconteceu um erro. Código: ${error.code}`)
        })
    }};


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
            <Button variant="success" className="rounded" onClick={handleShow}>
                Editar Perfil
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}> 
                        <Form.Group>
                            <Form.Label>Nome do Usuário</Form.Label>
                            <Form.Control type="text" autoFocus {...register("displayName",{required:"Nome é obrigatório", maxLength: { value: 10, message: "Limite de 10 caracteres!" } })}/>
                            <Form.Text className="text-muted">{errors.displayName?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" autoFocus {...register("email",{required:"Email é obrigatório", maxLength: { value: 100, message: "Limite de 100 caracteres!" } })}/>
                            <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Nova Senha</Form.Label>
                            <Form.Control type="password" autoFocus {...register("senha",{minLength:{value:6 ,message:"A senha deve ter no mínimo 6 caractéres"}})}/>
                            <Form.Text className="text-muted">{errors.senha?.message}</Form.Text>
                        </Form.Group>
                        <Modal.Footer>
                            
                            <Button type="submit" variant="success">Editar Informações</Button>
                            <Button onClick={onDelete}  variant="danger">Apagar Conta</Button>
                            </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}