import { View, Text } from "react-native";
import {useForm, Controller} from 'react-hook-form';
import { TextInput, Button } from "react-native-paper";

export default function HomeScreen({navigation, route}){

    const {
        control,
        handleSubmit, reset,
        formState:{errors},
    } = useForm({
        defaultValues: {
            iduser:"",
            fullname:"",
            email:"",
            password:"",
            uri:"",
            age:""
        },
    })
    const onSubmit = (data)=> console.log(data);
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*<text>Bienvenido {route.params.email}</text>*/}
            <Controller
               control={control}
               rules={{
                   required: true,
                   maxlength:12,
                   minlength:4,
                   pattern:/^[0-9]+$/
               }}
               render={({field:{onChange,onblur,value}}) =>(
                   <TextInput
                       label="Identificacion"
                       onBlur={onblur}
                       onChangeText={onChange}
                       value={value}
                   />
               )}
               name="iduser"
           />
           {errors.iduser?.type === "required" && <Text style={{color:'red'}}>Id del usuario es obligatorio.</Text>}
           {errors.iduser?.type === "maxlength" && <Text style={{color:'red'}}>La longitud debe ser hasta 12 chars.</Text>}
           {errors.iduser?.type === "minlength" && <Text style={{color:'red'}}>La longitud debe ser hasta 4 chars.</Text>}
           {errors.iduser?.type === "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros.</Text>}

           <Controller
             control={control}
             rules={{
                required:true,
                maxlength:30,
                minlength:3,
                pattern:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
              }}
              render={({ field: {onchange,onBlur,value}})=>(
                <TextInput
                 style={{marginTop:10}}
                 label="Nombre Completo"
                 onBlur={onBlur}
                 onChangeText={onchange}
                 value={value}
               />
            )}
            name="fullname"
           />
           {errors.fullname?.type === "required" && <Text style={{color:'red'}}>Nombre completo es obligatorio.</Text>}
           {errors.fullname?.type === "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
           {errors.fullname?.type === "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
           {errors.fullname?.type === "pattern" && <Text style={{color:'red'}}>Debe ingresar solo letras y/o espacios</Text>}

           <Controller
             control={control}
             rules={{
                required:true,
                maxlength:30,
                minlength:3,
                pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
              }}
              render={({ field: {onchange,onBlur,value}})=>(
                <TextInput
                 style={{marginTop:10}}
                 label="Correo Electronico"
                 onBlur={onBlur}
                 onChangeText={onchange}
                 value={value}
               />
            )}
            name="email"
           />
           {errors.email?.type === "required" && <Text style={{color:'red'}}>El correo es obligatorio</Text>}
           {errors.email?.type === "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
           {errors.email?.type === "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
           {errors.email?.type === "pattern" && <Text style={{color:'red'}}>Debe ingresar solo letras y/o espacios</Text>}

           <Controller
             control={control}
             rules={{
                required:true,
                maxlength:30,
                minlength:3,
                pattern:/^[a-z0-9]+$/
                
              }}
              render={({ field: {onchange,onBlur,value}})=>(
                <TextInput
                 style={{marginTop:10}}
                 label="Contraseña"
                 onBlur={onBlur}
                 onChangeText={onchange}
                 value={value}
               />
            )}
            name="password"
           />
           {errors.password?.type === "required" && <Text style={{color:'red'}}>La contaseña es obligatoria</Text>}
           {errors.password?.type === "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
           {errors.password?.type === "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
           {errors.password?.type === "pattern" && <Text style={{color:'red'}}>Debe ingresar letras minusculas y numeros</Text>}

           <Controller
             control={control}
             rules={{
                required:true,
                maxlength:3,
                minlength:3,
                pattern:/^[0-9]+$/
              }}
              render={({ field: {onchange,onBlur,value}})=>(
                <TextInput
                 style={{marginTop:10}}
                 label="Años"
                 onBlur={onBlur}
                 onChangeText={onchange}
                 value={value}
               />
            )}
            name="age"
           />
           {errors.age?.type === "required" && <Text style={{color:'red'}}>La edad es obligatoria</Text>}
           {errors.age?.type === "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 3 chars.</Text>}
           {errors.age?.type === "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 1 chars.</Text>}
           {errors.age?.type === "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros</Text>}

           


           <Button
                style={{marginTop:20, backgroundColor:'powderblue'}}
                icon="content-save"
                mode="outlined"
                onPress={handleSubmit(onSubmit)}
                >
                    Guardar
                    </Button>
            {/*<Button title="submit" onPress={handlesubmit(onSubmit)}/> */}
        </View>
    );
}