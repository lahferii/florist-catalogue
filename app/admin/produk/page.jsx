import { Card, CardHeader, CardContent, CardDescription} from "../components/ui/card"
import { DataTable } from "../components/dataTable"
import FormDialog from "../components/formDialog"

export default function Produk(){
    return(
        <div>
            <main>
                <article className="mb-10">
                    <h1 className="text-2xl tracking-wider">Dashboard</h1>
                </article>

                <Card className="w-full">
                    <CardHeader className="flex-row justify-between items-center">
                        <CardDescription>
                            <p className="text-lg tracking-wider">
                                Data Produk
                            </p>
                        </CardDescription>
                        
                        <FormDialog/>
                    </CardHeader>
                    
                    <CardContent>
                        <DataTable/>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}