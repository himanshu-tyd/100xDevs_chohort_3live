use std::{any::TypeId, collections::btree_map::Values};

use solana_program::{
    account_info::{next_account_info, AccountInfo}, address_lookup_table::instruction, entrypoint::ProgramResult, entrypoint_deprecated, msg, pubkey::Pubkey
};

entrypoint!(counter_contract);


struct  Counter{
    count:u32
}

enum InstructionType{
    Increment(u32),
    Decrementu(u32)
}

pub fn counter_contract(
    program_id: Pubkey,
    accounts: [AccountInfo],
    instruction_data: [u8] //0 3 34 23 23 39 50 23 23
) -> ProgramResult {

    let acc=next_account_info(&mut  accounts.iter())?; //? return what error or data

    acc.data+=1;
    acc.data-=1;    


    let instruction_type=InstructionType::try_from_slice(instruction_data);
    let counter_data=Counter()

    match  instruction_data {
        InstructionType::Increment(value)=>{
        
            counter_data.


        } ,
        InstructionType::Decrementu(value)=>acc.data-=value 
    }


    Ok(())
}
