/******************
 * 
 * Script by astroxii @ 2022
 * 
 * Have fun!
 * 
*******************/

/**
 *
 * The Message Encoder class. Have fun writing messages that only people using this script can read!
 *  
**/

class MessageEncoder
{
    #swap_distance;
    #alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    #specials = /[a-zA-Z]/;
    #numbers = /\d/;

    /**
     * @param {*} swap_distance An optional parameter for choosing the distance for letter-swapping in each instance. Default is 1.
    **/
    constructor(swap_distance = 1)
    {
        if(swap_distance > 0 && swap_distance < this.#alphabet.length)
        {
            this.#swap_distance = swap_distance;
        }
        else
        {
            throw new Error(`Specify a number between 1 and 25 for swapping.`);
        }
    }

    /**
     * @param {*} string The message to be encoded as binary.
     * @returns Binary encoded message.
    **/
    binaryEncode(string = "")
    {
        if(string?.length > 0)
        {
            let encoded = "";

            for(let i = 0; i < string.length; i++)
            {
                let byte = string.charCodeAt(i).toString(2);

                while(byte.length < 8) { byte = "0" + byte; }

                if((i+1) < string.length) { byte += " "; }

                encoded += byte;
            }

            return encoded;
        }
        else
        {
            throw new Error("Must specify string for encoding.");
        }
    }

    /**
     * @param {*} string The binary message to be decoded.
     * @returns Human-readable message.
    **/
    binaryDecode(string = "")
    {
        let binaries = string.split(" ");

        if(binaries[0]?.length === 8)
        {
            let decoded = "";

            binaries.forEach(bin => 
            {
                decoded += String.fromCharCode(Number.parseInt(bin, 2));
            });

            return decoded;
        }
        else
        {
            throw new Error("Given string do not contains proper format. Must contain Bytes with length 8 and be separated by spaces.");
        }

    }

    /**
     * @param {*} string The message to be letter-swapped, using the swap_distance argument or 1 as distance.
     * @returns Letter-swapped message.
    **/
   // Add number swap............................................................... >>>
    swapEncode(string = "")
    {
        if(string?.length > 0)
        {
            let encoded = "";

            for(let i = 0; i < string.length; i++)
            {
                if(this.#specials.test(string[i]))
                {
                    if(this.#alphabet.indexOf(string[i].toUpperCase()) + this.#swap_distance > this.#alphabet.length-1)
                    {
                        let rest = this.#swap_distance - (this.#alphabet.length - this.#alphabet.indexOf(string[i].toUpperCase()));

                        if(this.#alphabet.indexOf(string[i]) > -1)
                        {
                            encoded += this.#alphabet[rest];
                        }
                        else
                        {
                            encoded += this.#alphabet.toLowerCase()[rest];
                        }
                    }
                    else
                    {
                        if(this.#alphabet.indexOf(string[i]) > -1)
                        {
                            encoded += this.#alphabet[this.#alphabet.indexOf(string[i]) + this.#swap_distance];
                        }
                        else
                        {
                            encoded += this.#alphabet.toLowerCase()[this.#alphabet.toLowerCase().indexOf(string[i]) + this.#swap_distance];
                        }
                    }
                }
                else
                {
                    if(this.#numbers.test(string[i]))
                    {
                        encoded += (parseInt(string[i]) + this.#swap_distance).toString();
                    }
                    else
                    {
                        encoded += string[i];
                    }
                }
            }

            return encoded;
        }
        else
        {
            throw new Error("Must specify string for encoding.");
        }
    }

    /**
     * @param {*} string The letter-swapped message to be decoded.
     * @returns Human-readable message.
    **/
    swapDecode(string = "")
    {
        if(string?.length > 0)
        {
            let decoded = "";

            for(let i = 0; i < string.length; i++)
            {
                if(this.#specials.test(string[i]))
                {
                    if(this.#alphabet.indexOf(string[i].toUpperCase()) - this.#swap_distance < 0)
                    {
                        let rest = this.#alphabet.length - (this.#swap_distance - this.#alphabet.indexOf(string[i].toUpperCase()));

                        if(this.#alphabet.indexOf(string[i]) > -1)
                        {
                            decoded += this.#alphabet[rest];
                        }
                        else
                        {
                            decoded += this.#alphabet.toLowerCase()[rest];
                        }
                    }
                    else
                    {
                        if(this.#alphabet.indexOf(string[i]) > -1)
                        {
                            decoded += this.#alphabet[this.#alphabet.indexOf(string[i]) - this.#swap_distance];
                        }
                        else
                        {
                            decoded += this.#alphabet.toLowerCase()[this.#alphabet.toLowerCase().indexOf(string[i]) - this.#swap_distance];
                        }
                    }
                }
                else
                {
                    if(this.#numbers.test(string[i]))
                    {
                        decoded += (parseInt(string[i]) - this.#swap_distance).toString();
                    }
                    else
                    {
                        decoded += string[i];
                    }
                }
            }

            return decoded;
        }
        else
        {
            throw new Error("Must specify string for decoding.");
        }
    }
}

/***************************************************************************/

// A small demonstration of usage:

const me = new MessageEncoder(18);

const binary = me.binaryEncode("Hello! This is a binary encoded message.");
const fromBinary = me.binaryDecode(binary);
const swapped = me.swapEncode("Hello! This is a letter-swapped message.");
const fromSwapped = me.swapDecode(swapped);

console.log(binary, "\n", fromBinary);
console.log("\n\n");
console.log(swapped, "\n", fromSwapped);

/***************************************************************************/

module.exports = { MessageEncoder };