export default function vendorReducer(state = {vendors: []}, action){
    
    switch (action.type) {
        
        case 'FETCH_VENDORS':
            return { vendors: action.payload }
            // break;
        
        case 'ADD_VENDOR':
            return {...state, vendors: [...state.vendors, action.payload]}
        
        case 'ADD_PRODUCT':
            let vendors = state.vendors.map(vendor => {
                if (vendor.id === action.payload.id){
                    return action.payload
                } else {
                    return vendor
                }
            })
            return { ...state, vendors: vendors}
        
        case 'DELETE_PRODUCT':
            let selectedProductToDelete = state.vendors.map(vendor => {
                if (vendor.id === action.payload.id){
                    return action.payload
                } else {
                    return vendor
                }
            })
            return { ...state, vendors: selectedProductToDelete }

        default:
            return state
    }
}