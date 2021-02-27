import * as yup from 'yup';


export default yup.object().shape(
    {
        size:yup.string().required('Please select a pizza size'), //size of pizza
        choice:yup.string().required('Please select a saucy sauce!'), //sauce
        //toppings
        pepperoni:yup.boolean(),
        calabresa:yup.boolean(),
        shrimp:yup.boolean(),
        catupiry:yup.boolean(),
        gltn:yup.string(), //gluten or na
        special:yup.string().required('im dumb'),
        items:yup.string(), //# of items

    }
)