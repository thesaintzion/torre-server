export default {
    port: 3000,
    dbUri: 'mongodb+srv://saint123:saintzion123@cluster0-341ff.mongodb.net/mono?retryWrites=true&w=majority',
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    accessTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
    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
    -----END RSA PRIVATE KEY-----`,
    accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAlUeZTjnsIT2dL10FGe3U
    pJtX1kZorJGnyHDMMaUUFjRVuxjIRmRLJuNUI0TkE9BLCbM2p1oNh8WWJJ9dNl3R
    2FfOccOQ4EJqN9HI37wuQ6ppafylS8EpoFwC2LDc/Un+3bOjJtFaiiJpFJRjrN6/
    DTl2M5gccZ8+qasYVTWCyleu/sUIiYUhp7q+TNyp4dB+uk9rpo+NLLsDflFwRcPS
    VZMDddVOGInd/++PaklKPe/EZ41qI2u/t32wBnSB4KCTvQ2CRQJ5TCIKlogc2V5A
    Hikndl1Kyc9LRbYTcCHroeHr35CNxzdhwUATO38fdxvpoTl86F9X7BsRw/y1/9o+
    mrYGsUh7KPEh1VQuMKCNwt4Y6bXBOfELUOv88PDIOQYabvObCRGHG/zBRa2uu+S/
    tL+SoyjEhwhzj3puOsvMNYB8s0l9T4jkk+8TntKhe9BEiJJuLw5bjHe+OrSiVnmo
    phqx76JxXGTGXie4BmWVLZXKANDAC6Cyho/a9L9hHHPceSz+eK16pQAvmbGCWuzB
    wWjpVN92c4dK0LgviCRdK0RNqj4lioabgTS7aywUjwvsoXqk9WZ1BnlRREfbcS3G
    2RwsQbx3j9SRtfwPQJdoQKotvpnqRTeC7IMNVWPQSdm2WWch3Q9C4C4P353FkWwb
    VvbAeN2nsyQ9DbUm7sVyroMCAwEAAQ==
    -----END PUBLIC KEY-----`,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,
  };