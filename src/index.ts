import * as CryptoJS from "crypto-js"

class Block {
    static calculateBlockHash = (
        index: number, 
        previous_hash: string, 
        time_stamp: number, 
        data: string
    ): string => CryptoJS.SHA256(index + previous_hash + time_stamp + data).toString()

    static validateStructure = (block: Block): boolean => 
        typeof block.index === "number" && 
        typeof block.hash === "string" && 
        typeof block.previous_hash === "string" && 
        typeof block.time_stamp === "number" && 
        typeof block.data === "string";

    public index: number;
    public hash: string;
    public previous_hash: string;
    public data: string;
    public time_stamp: number;
    constructor(
        index: number, 
        hash: string, 
        previous_hash: string, 
        data: string, 
        time_stamp: number
    ) {
        this.index = index
        this.hash = hash
        this.previous_hash = previous_hash
        this.data = data
        this.time_stamp = time_stamp
    }
}

const genesis_block: Block = new Block(0, "20202020202", "","Hello World!", 123456)

let block_chain: [Block] = [genesis_block]

const getBlockchain = (): Block[] => block_chain
const getLatestBlock = (): Block => block_chain[block_chain.length - 1]
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)
const getHashForBlock = (block: Block): string => Block.calculateBlockHash(block.index, block.previous_hash, block.time_stamp, block.data)

const createNewBlock = (data: string): Block => {
    const previous_block: Block = getLatestBlock()
    const new_index: number = previous_block.index + 1
    const new_time_stamp: number = getNewTimeStamp()
    const new_hash: string = Block.calculateBlockHash(new_index, previous_block.hash, new_time_stamp, data)

    const new_block: Block = new Block(new_index, new_hash, previous_block.hash, data, new_time_stamp)
    addBlock(new_block)

    return new_block
}

const isBlockValid = (candidate_block: Block, previous_block: Block): boolean => {
    if (Block.validateStructure(candidate_block) == false) {
        return false
    }
    if (Block.validateStructure(previous_block) == false) {
        return false
    }
    if (previous_block.index + 1 !== candidate_block.index){
        return false
    }
    if (getHashForBlock(candidate_block) !== candidate_block.hash){
        return false
    }

    return true 
} 

const addBlock = (candidate_block: Block): void => {
    if (isBlockValid(candidate_block, getLatestBlock()))
    {
        block_chain.push(candidate_block)
    }
}

createNewBlock("2nd Block")
createNewBlock("3rd Block")
createNewBlock("4th Block")

console.log(getBlockchain())

export {}