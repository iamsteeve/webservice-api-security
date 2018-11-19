import { Injectable } from '@nestjs/common';
import * as forge from 'node-forge';

@Injectable()
export class HashService {

    private word: string = '';

    public create(word: string): string {
        this.word = word;
        return this.startHash();
    }
    private startHash(): string {
        const md = forge.md.md5.create();
        md.update(this.word);
        return md.digest().toHex();
    }
}
