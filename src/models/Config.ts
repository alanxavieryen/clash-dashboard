import { Proxy, ProxyGroup } from './Proxy'
import { Rule } from './Rule'

/**
 * clash config
 * @see https://github.com/Dreamacro/clash#config
 */
export interface Config {

    general?: {

        /**
         * http proxy port
         */
        port?: number

        /**
         * socks proxy port
         */
        socksPort?: number

        /**
         * redir proxy port
         */
        redirPort?: number

        /**
         * proxy is allow lan
         */
        allowLan?: boolean

        /**
         * controller port
         */
        externalControllerPort?: string

        /**
         * controller address
         */
        externalControllerAddr?: string

        /**
         * controller secret
         */
        secret?: string

        /**
         * clash proxy mode
         */
        mode?: string

        /**
         * clash tty log level
         */
        logLevel?: string
    }

    proxy?: Proxy[]

    proxyGroup?: ProxyGroup[]

    rules?: Rule[]

}
