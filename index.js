import{app} from "./src/app.js"
import { PORT } from "./src/constants/constants.js";

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
    
})