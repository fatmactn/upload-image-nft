import { NFTStorage, File } from 'nft.storage'
import * as fs from 'fs/promises'

const token = "your API KEY"

const client = new NFTStorage({ token })

async function storeImage(filename) {
    const content = await fs.readFile(filename)


    const f = new File([content], filename, { type: 'image/jpg' })


    const cid = await client.storeBlob(f)
    console.log(cid) //content id
}


async function main() {
    const filename = process.argv[2]
    console.log('storing ', filename)
    await storeImage(filename)

}

main()