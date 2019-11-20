describe('cipher', () => {

  //caso 1//
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  

  describe('cipher.encode', () => {

    //caso2//
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });


    //caso 3//
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ","33"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar " " para " " con offset 33', ()=>{
      assert.equal(cipher.encode(" ","33")," ");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz","33"),"hijklmnopqrstuvwxyzabcdefg");
    });
  });




  describe('cipher.decode', () => {

    //caso 4//
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    //caso 5//

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG","33"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    });

    it('debería retornar " " para " " con offset 33', ()=>{
      assert.equal(cipher.decode(" ","33")," ");
    });
  
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg","33"),"abcdefghijklmnopqrstuvwxyz");
    });
  


});
});

