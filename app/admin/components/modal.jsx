'use client'

import { useState } from "react"

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select"


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

function FormDialog({children, title, description, action, oldName, oldCategory, oldPrice}) {
  const [category, setCategory] = useState(oldCategory ?? "");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Nama Produk</Label>
            <Input id="name" name="name" defaultValue={oldName} />
          </div>

          {/* ✅ SELECT FIX */}
          <div className="grid gap-3">
            <Label>Kategori Produk</Label>
            <Select
              value={category}
              onValueChange={setCategory}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="buket-uang">Buket Uang</SelectItem>
                  <SelectItem value="fresh-flower">Fresh Flower</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* hidden input supaya ikut ke submit */}
            <input type="hidden" name="category" value={category} />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="harga">Harga</Label>
            <Input
              id="harga"
              name="harga"
              defaultValue={oldPrice}
            />
          </div>

          <div className="grid gap-3 mb-5">
            <Label htmlFor="foto">Foto</Label>
            <Input id="foto" name="foto" type="file" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Batal</Button>
            </DialogClose>
            <Button type="submit">{action}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}


function DeleteDialog({ target, onConfirm, children }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah kamu yakin ingin menghapus {target}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini tidak dapat dibatalkan dan akan bersifat permanen!
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}


export { FormDialog, DeleteDialog }