import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
      categories: [
        {
          categoryName: "CSPM Executive Dashboard",
          widgets: []
        },
        {
          categoryName: "CWPP Dashboard",
          widgets: []
        },
        {
          categoryName: "Registry Scan",
          widgets: []
        },
        {
          categoryName: "Ticket Scan",
          widgets: []
        }
      ]
    }
};

const widgetSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { categoryName, newWidget } = action.payload;
            const category = state.data.categories.find((cat) => cat.categoryName === categoryName)
            if(category) {
              category.widgets.push(newWidget)
            }
        },

        removeWidget: (state, action) => {
            const { categoryName, widgetIndex } = action.payload;
            const category = state.data.categories.find((cat) => cat.categoryName === categoryName)
            if(category) {
              category.widgets.splice(widgetIndex, 1)
            }
        }
    }
})

export const { addWidget, removeWidget } = widgetSlice.actions
export default widgetSlice.reducer