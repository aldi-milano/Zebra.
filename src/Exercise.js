let Biodata = () => {
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-container">
          <div className="profile-picture">
            <img src="https://th.bing.com/th/id/R.488942d08cab5deba464e73d2f1d7750?rik=UqqL%2fHiv%2f6hgcA&riu=http%3a%2f%2fclipground.com%2fimages%2ftabbed-cat-clipart-13.jpg&ehk=Bo0ZONXw6fDtkrb%2bdcu2C7liDEAqfXRXkqkv03OVzGY%3d&risl=&pid=ImgRaw&r=0" />
          </div>
          <div className="profile-data">
            <table className="table">
              <tr>
                <td className="span-bold">Name</td>
                <td>:</td>
                <td>Aldi Milano</td>
              </tr>
              <tr>
                <td className="span-bold">Birthplace</td>
                <td>:</td>
                <td>Bandung, Indonesia</td>
              </tr>
              <tr>
                <td className="span-bold">Sex</td>
                <td>:</td>
                <td>Male</td>
              </tr>
              <tr>
                <td className="span-bold">Date of Birth</td>
                <td>:</td>
                <td>September, 17</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="bio">
          <h2>BIO</h2>
          <p>
            Hai, this is Biography column, I'd like to make it side by side.
          </p>
          <p>
            Here's a little bit about me. I've lost my hearing due to the side
            effect of medication that I had received for over past 2 years more or
            less. It was devastating for me at the first. Hardly to communicate,
            cannot be able to hear the sound of the great Jimi's Hendrix guitar solo. but
            now, thank to God I can overcome it little by little and send me
            good peoples to help me passing through hard times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
