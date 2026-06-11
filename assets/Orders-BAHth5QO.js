import{C as e,D as t,T as n,c as r,f as i,h as a,m as o,n as s,p as c,t as l,u,v as d,w as f,y as p}from"./index-D5kGeTBl.js";var m={class:`card p-0`,style:{"overflow-x":`auto`}},h={class:`w-full text-left`,style:{"border-collapse":`collapse`}},g={class:`p-4 font-semibold`},_={class:`p-4`},v={class:`p-4`},y={class:`text-light`},b={class:`p-4 font-semibold text-primary`},x={class:`p-4`},S={class:`p-4 flex gap-2 items-center`},C=[`value`,`onChange`],w=[`onClick`],T={key:0},E={key:0,class:`modal-backdrop flex items-center justify-center`},D={class:`card p-6 w-full`,style:{"max-width":`600px`,"max-height":`90vh`,"overflow-y":`auto`}},O={class:`flex justify-between items-center mb-4`},k={class:`flex items-center gap-4`},A={style:{margin:`0`}},j={class:`grid grid-cols-2 gap-4 mb-6`},M={class:`font-semibold`},N={class:`font-semibold`},P={style:{"grid-column":`span 2`}},F={style:{"grid-column":`span 2`}},I={class:`mb-6 pl-4`,style:{"list-style-type":`disc`}},L={key:0,class:`text-light text-sm italic`,style:{"list-style-type":`none`,"margin-left":`-1rem`}},R={key:0,class:`text-center bg-surface p-4`,style:{"border-radius":`var(--radius-md)`}},z=[`src`],B={key:1,class:`text-light italic`},V={class:`mt-8 text-right`},H=l({__name:`Orders`,setup(l){let H=e(null),U=e=>{H.value=e},W=()=>{if(!H.value)return;let e=window.open(``,`_blank`),t=``;H.value.items&&H.value.items.forEach(e=>{t+=`
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${e.name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${e.qty}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">Rp ${(e.price*e.qty).toLocaleString(`id-ID`)}</td>
        </tr>
      `});let n=`
    <html>
      <head>
        <title>Invoice - ${H.value.id}</title>
        <style>
          @page { size: A5; margin: 15mm; }
          body { font-family: Arial, sans-serif; line-height: 1.5; color: #000; margin: 0; padding: 0; }
          .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #7E8936; padding-bottom: 10px; }
          .header h1 { margin: 0; color: #7E8936; font-size: 20px; }
          .info table { width: 100%; font-size: 14px; margin-bottom: 20px; }
          .info td { padding: 4px 0; vertical-align: top; }
          .items { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; }
          .items th { text-align: left; background-color: #f8fafc; padding: 8px; border-bottom: 2px solid #000; }
          .total { text-align: right; font-size: 16px; font-weight: bold; border-top: 2px solid #000; padding-top: 10px; }
          .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #555; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>WARUNG KENYANG</h1>
          <p style="margin: 0; font-size: 12px;">Invoice Pesanan</p>
        </div>
        
        <div class="info">
          <table>
            <tr><td style="width: 100px;"><strong>ID Pesanan</strong></td><td>: ${H.value.id}</td></tr>
            <tr><td><strong>Tanggal</strong></td><td>: ${H.value.date}</td></tr>
            <tr><td><strong>Pelanggan</strong></td><td>: ${H.value.customerName}</td></tr>
            <tr><td><strong>WhatsApp</strong></td><td>: ${H.value.phone}</td></tr>
            <tr><td><strong>Alamat</strong></td><td>: ${H.value.address||`-`}</td></tr>
            <tr><td><strong>Catatan</strong></td><td>: ${H.value.notes||`-`}</td></tr>
          </table>
        </div>

        <table class="items">
          <thead>
            <tr>
              <th>Item</th>
              <th style="text-align: center; width: 50px;">Qty</th>
              <th style="text-align: right; width: 100px;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${t||`<tr><td colspan="3" style="text-align:center; padding: 8px;">Data barang lama</td></tr>`}
          </tbody>
        </table>

        <div class="total">
          TOTAL: Rp ${H.value.total.toLocaleString(`id-ID`)}
        </div>

        <div class="footer">
          Terima kasih atas pesanan Anda!
        </div>
      </body>
    </html>
  `;e.document.open(),e.document.write(n),e.document.close(),setTimeout(()=>{e.print()},250)},G=(e,t)=>{s.updateOrderStatus(e,t),alert(`Status pesanan ${e} berhasil diperbarui menjadi: ${t}`)},K=e=>e.includes(`Selesai`)?`bg-primary text-white`:e.includes(`Dikirim`)||e.includes(`Diproses`)?`bg-primary-light text-primary`:`bg-surface text-light border`;return(e,l)=>(d(),c(`div`,null,[l[12]||=u(`h2`,{class:`mb-6`},`Kelola Pesanan`,-1),u(`div`,m,[u(`table`,h,[l[5]||=u(`thead`,{class:`bg-surface border-bottom`},[u(`tr`,null,[u(`th`,{class:`p-4`},`ID Pesanan`),u(`th`,{class:`p-4`},`Tanggal`),u(`th`,{class:`p-4`},`Pelanggan`),u(`th`,{class:`p-4`},`Total`),u(`th`,{class:`p-4`},`Status`),u(`th`,{class:`p-4`},`Aksi Status`)])],-1),u(`tbody`,null,[(d(!0),c(r,null,p(f(s).orders,e=>(d(),c(`tr`,{key:e.id,class:`border-bottom`},[u(`td`,g,t(e.id),1),u(`td`,_,t(e.date),1),u(`td`,v,[a(t(e.customerName),1),l[2]||=u(`br`,null,null,-1),u(`small`,y,t(e.phone),1)]),u(`td`,b,`Rp `+t(e.total.toLocaleString(`id-ID`)),1),u(`td`,x,[u(`span`,{class:n([`badge`,K(e.status)])},t(e.status),3)]),u(`td`,S,[u(`select`,{class:`input p-2 text-sm`,style:{"min-width":`140px`},value:e.status,onChange:t=>G(e.id,t.target.value)},[...l[3]||=[o(`<option value="Menunggu Pembayaran" data-v-7ab03af6>Menunggu Pembayaran</option><option value="Menunggu Konfirmasi Admin" data-v-7ab03af6>Menunggu Konfirmasi</option><option value="Pesanan Diproses" data-v-7ab03af6>Diproses</option><option value="Pesanan Dikirim" data-v-7ab03af6>Dikirim</option><option value="Pesanan Selesai" data-v-7ab03af6>Selesai</option>`,5)]],40,C),u(`button`,{class:`btn btn-outline text-sm`,style:{padding:`0.5rem`},onClick:t=>U(e)},`Detail`,8,w)])]))),128)),f(s).orders.length===0?(d(),c(`tr`,T,[...l[4]||=[u(`td`,{colspan:`6`,class:`p-8 text-center text-light`},`Belum ada pesanan.`,-1)]])):i(``,!0)])])]),H.value?(d(),c(`div`,E,[u(`div`,D,[u(`div`,O,[u(`div`,k,[u(`h3`,A,`Detail Pesanan: `+t(H.value.id),1),u(`button`,{class:`btn btn-outline text-sm`,style:{padding:`0.25rem 0.5rem`},onClick:W},`🖨️ Cetak Invoice`)]),u(`button`,{onClick:l[0]||=e=>H.value=null,style:{background:`none`,border:`none`,"font-size":`1.5rem`,cursor:`pointer`}},`×`)]),u(`div`,j,[u(`div`,null,[l[6]||=u(`p`,{class:`text-sm text-light`},`Nama Pelanggan`,-1),u(`p`,M,t(H.value.customerName),1)]),u(`div`,null,[l[7]||=u(`p`,{class:`text-sm text-light`},`WhatsApp`,-1),u(`p`,N,t(H.value.phone),1)]),u(`div`,P,[l[8]||=u(`p`,{class:`text-sm text-light`},`Alamat Pengiriman`,-1),u(`p`,null,t(H.value.address||`Tidak ada data alamat.`),1)]),u(`div`,F,[l[9]||=u(`p`,{class:`text-sm text-light`},`Catatan Tambahan`,-1),u(`p`,null,t(H.value.notes||`-`),1)])]),l[10]||=u(`h4`,{class:`mb-2 border-bottom pb-2`},`Rincian Barang`,-1),u(`ul`,I,[(d(!0),c(r,null,p(H.value.items,(e,n)=>(d(),c(`li`,{key:n,class:`mb-1`},t(e.name)+` (`+t(e.qty)+`x) - Rp `+t((e.price*e.qty).toLocaleString(`id-ID`)),1))),128)),!H.value.items||H.value.items.length===0?(d(),c(`li`,L,`Data barang tidak tersedia di pesanan ini (pesanan lama).`)):i(``,!0)]),l[11]||=u(`h4`,{class:`mb-2 border-bottom pb-2`},`Bukti Pembayaran`,-1),H.value.paymentProof?(d(),c(`div`,R,[u(`img`,{src:H.value.paymentProof,alt:`Bukti Pembayaran`,style:{"max-width":`100%`,"max-height":`300px`,"object-fit":`contain`}},null,8,z)])):(d(),c(`p`,B,`Belum ada lampiran bukti pembayaran.`)),u(`div`,V,[u(`button`,{class:`btn btn-primary`,onClick:l[1]||=e=>H.value=null},`Tutup`)])])])):i(``,!0)]))}},[[`__scopeId`,`data-v-7ab03af6`]]);export{H as default};