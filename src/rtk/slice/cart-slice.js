import { createSlice } from "@reduxjs/toolkit";

// تعريف الحالة الأولية للعربة، والتي تحتوي على مصفوفة فارغة لتمثيل المنتجات الموجودة في العربة
const initialState = {
    cart:JSON.parse(localStorage.getItem("products")) || [],
}

// إنشاء شريحة Redux باستخدام createSlice
const cartSlice = createSlice({
    name: 'cart', // اسم الشريحة
    initialState, // الحالة الأولية
    reducers: {
        // دالة لإضافة منتج إلى العربة
        addToCart: (state, action) => {
            // البحث عن المنتج في العربة بناءً على معرفه
            const findProduct = state.cart.find((item) => item.id === action.payload.id);
            if(findProduct) {
                // إذا كان المنتج موجودًا بالفعل، زيادة الكمية
                findProduct.quantity += 1;
            } else {
                // إذا لم يكن المنتج موجودًا، إضافة المنتج إلى العربة مع تحديد الكمية إلى 1
                const product = {...action.payload, quantity: 1}
                state.cart.push(product)
                // تخزين بيانات العربة في التخزين المحلي (localStorage)
                localStorage.setItem("products", JSON.stringify(state.cart))
            }
        },
        // دالة لحذف منتج من العربة
        deleteFromCart: (state, action) => {
            // إزالة المنتج من العربة بناءً على معرفه
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        // دالة لتفريغ العربة
        clear: (state) => {
            // إعادة تعيين العربة إلى مصفوفة فارغة
            state.cart = []
        }
    },
    // يمكن استخدام extraReducers لإضافة أكشنات أخرى من شرائح أخرى، هنا غير مستخدمة
    extraReducers: () => {}
})

// تصدير الأكشنات التي تم تعريفها في الشريحة للاستخدام في مكونات أخرى
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

// تصدير المولد الافتراضي للشريحة ليتم إضافته إلى المتجر
export default cartSlice.reducer;
