import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "./ui/dialog"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function FormDialog(){
  return(
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="sm">Tambah Produk</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Menambahkan Produk</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Nama Produk</Label>
              <Input id="name" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="harga">Harga</Label>
              <Input id="harga" name="username"/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="harga">Foto</Label>
              <Input id="harga" name="foto" type="file"/>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Batal</Button>
            </DialogClose>
            <Button type="submit">Tambahkan</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}