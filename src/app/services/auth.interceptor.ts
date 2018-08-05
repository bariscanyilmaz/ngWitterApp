import { HttpInterceptor,HttpHandler,HttpRequest } from "@angular/common/http";
import 'rxjs/add/operator/do';


export class AuthInterceptor implements HttpInterceptor{
        
    //user class oluştur httprequest type ına koy
    intercept(req:HttpRequest<any>,next:HttpHandler){

        const token=localStorage.getItem('token')

        const newReq=req.clone({
            headers:req.headers.set(
                'Authorization','Bearer '+token
            )
        });

        return next.handle(newReq)
            .do(
                succ=>console.log(succ),
                err=>console.log(err)
            );
    }

}