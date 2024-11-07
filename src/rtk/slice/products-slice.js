import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// تعريف الحالة الأولية للمنتجات
const initialState = {
    products: [], // مصفوفة فارغة لتمثيل المنتجات
    loading: true, // حالة تحميل البيانات
    error: null, // حالة الخطأ
}

// تعريف دالة غير متزامنة لجلب المنتجات من API وهمي
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", // اسم الـ thunk
    async (_, thunkAPI) => { // الدالة غير المتزامنة التي تنفذ عملية الجلب
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch("https:/fakestoreapi.com/products"); // جلب البيانات من API الوهمي
            const data = await res.json(); // تحويل الاستجابة إلى JSON
            return data; // إعادة البيانات المحولة
        } catch (error) {
            return rejectWithValue(error.message); // إعادة رسالة الخطأ في حالة الفشل
        }
    }
);

// إنشاء شريحة Redux باستخدام createSlice
export const productsSlice = createSlice({
    name: 'products', // اسم الشريحة
    initialState, // الحالة الأولية
    reducers: {}, // لا توجد معالجات مخصصة
    extraReducers: (builder) => {
        // معالجة الحالة أثناء جلب البيانات (قيد التحميل)
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true; // تعيين حالة التحميل إلى true
            state.error = null; // إعادة تعيين الخطأ إلى null
        });
        // معالجة الحالة عند إكمال جلب البيانات بنجاح
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false; // تعيين حالة التحميل إلى false
            state.products = action.payload; // تعيين المنتجات إلى البيانات المسترجعة
        });
        // معالجة الحالة عند فشل جلب البيانات
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false; // تعيين حالة التحميل إلى false
            state.error = action.payload; // تعيين الخطأ إلى رسالة الخطأ المسترجعة
        });
    }
})

// تصدير المولد الافتراضي للشريحة ليتم إضافته إلى المتجر
export default productsSlice.reducer
