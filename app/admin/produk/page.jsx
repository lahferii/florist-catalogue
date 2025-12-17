import * as React from "react"
import { Card, CardHeader, CardContent, CardDescription } from "../components/ui/card"
import { DataTable } from "../components/dataTable"
import { FormDialog } from "../components/modal"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function Produk() {
    return (
        <div>
            <main>
                <article className="mb-10">
                    <h1 className="text-2xl tracking-wider">Kelola Produk</h1>
                </article>

                <Card className="w-full">
                    <CardHeader className="md:flex-row md:justify-between md:items-center gap-5 md:gap-0">
                        <CardDescription>
                            <p className="text-lg tracking-wider">
                                Data Produk
                            </p>
                        </CardDescription>

                        <div className="flex gap-5 justify-between">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="all">Semua Kategori</SelectItem>
                                        <SelectItem value="apple">Buket Uang</SelectItem>
                                        <SelectItem value="banana">Fresh Flower</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormDialog
                                title="Menambahkan Produk"
                                description="Isi data produk lalu klik simpan."
                                action="Tambahkan"
                            >
                                <Button size="sm">Tambah Produk</Button>
                            </FormDialog>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <DataTable />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}