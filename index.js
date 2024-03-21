const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const currentDay = currentDate.getDate()
const baseUrl = `https://api.myquran.com/v2/sholat/jadwal/1219/${year}/${
  month > 9
    ? month
    : `0${month}/${currentDay > 9 ? currentDay : `0${currentDay}`}`
}`
const imsak = document.getElementById("imsak")
const terbit = document.getElementById("terbit")
const subuh = document.getElementById("subuh")
const dzuhur = document.getElementById("dzuhur")
const ashar = document.getElementById("ashar")
const maghrib = document.getElementById("maghrib")
const isya = document.getElementById("isya")

document.addEventListener("DOMContentLoaded", getData)

async function getData() {
  let datas = []
  try {
    const requestApi = await fetch(baseUrl)
    const { data } = await requestApi.json()
    if (data && data.jadwal) {
      datas = data.jadwal
      tanggal.textContent += datas.tanggal
      imsak.textContent += datas.imsak
      terbit.textContent += datas.terbit
      dhuha.textContent += datas.dhuha
      subuh.textContent += datas.subuh
      dzuhur.textContent += datas.dzuhur
      ashar.textContent += datas.ashar
      maghrib.textContent += datas.maghrib
      isya.textContent += datas.isya
    } else {
      console.error("Data tidak ditemukan atau struktur respons tidak sesuai.")
    }
  } catch (error) {
    console.log(error)
  }
}
